package stomp.configuration;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;


@Configuration
public class ServerProperties {
    private static final int DEFAULT_BUFFER_SIZE = 4096;
    private static final long DEFAULT_COUNTER_MAXIMUM_VALUE = 100000000000L; //1e11
    private static final int DEFAULT_WEBSOCKET_MESSAGE_SIZE_LIMIT_BYTES = 2 * 1024 * 1024;
    private static final int DEFAULT_WEBSOCKET_SEND_BUFFER_SIZE_LIMIT_BYTES = 10 * 1024 * 1024;
    private static final int DEFAULT_WEBSOCKET_SEND_TIME_LIMIT_MS = 20000;

    @Value("${server.buffer.size:" + DEFAULT_BUFFER_SIZE + "}")
    private int serverBufferSize;

    @Value("${server.counter.maximum.value:" + DEFAULT_COUNTER_MAXIMUM_VALUE + "}")
    private long serverCounterMaximumValue;

    @Value("${server.web.socket.message.size.limit.bytes:" + DEFAULT_WEBSOCKET_MESSAGE_SIZE_LIMIT_BYTES + "}")
    private int websocketMessageSizeLimitBytes;

    @Value("${server.web.socket.send.buffer.size.limit.bytes:" + DEFAULT_WEBSOCKET_SEND_BUFFER_SIZE_LIMIT_BYTES + "}")
    private int websocketSendBufferSizeLimitBytes;

    @Value("${server.web.socket.send.time.limit.ms:" + DEFAULT_WEBSOCKET_SEND_TIME_LIMIT_MS + "}")
    private int websocketSendTimeLimitMS;

    public int getServerBufferSize() {
        return serverBufferSize;
    }

    public long getServerCounterMaximumValue() {
        return serverCounterMaximumValue;
    }

    public int getWebsocketMessageSizeLimitBytes() {
        return websocketMessageSizeLimitBytes;
    }

    public int getWebsocketSendBufferSizeLimitBytes() {
        return websocketSendBufferSizeLimitBytes;
    }

    public int getWebsocketSendTimeLimitMS() {
        return websocketSendTimeLimitMS;
    }
}
