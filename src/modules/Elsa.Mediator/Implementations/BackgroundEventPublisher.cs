using System.Threading.Channels;
using Elsa.Mediator.Services;

namespace Elsa.Mediator.Implementations;

public class BackgroundEventPublisher : IBackgroundEventPublisher
{
    private readonly ChannelWriter<INotification> _channelWriter;
    public BackgroundEventPublisher(ChannelWriter<INotification> channelWriter) => _channelWriter = channelWriter;
    public async Task PublishAsync(INotification notification, CancellationToken cancellationToken = default) => await _channelWriter.WriteAsync(notification, cancellationToken);
}