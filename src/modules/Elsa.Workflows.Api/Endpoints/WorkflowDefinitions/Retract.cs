using System.Threading;
using System.Threading.Tasks;
using Elsa.AspNetCore.Attributes;
using Elsa.Persistence.Common.Models;
using Elsa.Workflows.Core.Serialization;
using Elsa.Workflows.Management.Services;
using Elsa.Workflows.Persistence.Entities;
using Elsa.Workflows.Persistence.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Elsa.Workflows.Api.Endpoints.WorkflowDefinitions;

[Area(AreaNames.Elsa)]
[ApiEndpoint(ControllerNames.WorkflowDefinitions, "Retract")]
[ProducesResponseType(typeof(WorkflowDefinition), StatusCodes.Status200OK)]
public class Retract : Controller
{
    private readonly SerializerOptionsProvider _serializerOptionsProvider;
    private readonly IWorkflowDefinitionStore _store;
    private readonly IWorkflowDefinitionPublisher _workflowDefinitionPublisher;

    public Retract(
        SerializerOptionsProvider serializerOptionsProvider,
        IWorkflowDefinitionStore store,
        IWorkflowDefinitionPublisher workflowDefinitionPublisher)
    {
        _serializerOptionsProvider = serializerOptionsProvider;
        _store = store;
        _workflowDefinitionPublisher = workflowDefinitionPublisher;
    }

    public async Task<IActionResult> HandleAsync(string definitionId, CancellationToken cancellationToken)
    {
        var definition = await _store.FindByDefinitionIdAsync(definitionId, VersionOptions.LatestOrPublished, cancellationToken);

        if (definition == null)
            return NotFound();
        
        if (!definition.IsPublished)
            return BadRequest(new
            {
                Message = $"Workflow with id {definitionId} is not published"
            });

        await _workflowDefinitionPublisher.RetractAsync(definition, cancellationToken);
        var serializerOptions = _serializerOptionsProvider.CreateApiOptions();

        return Json(definition, serializerOptions);
    }
}