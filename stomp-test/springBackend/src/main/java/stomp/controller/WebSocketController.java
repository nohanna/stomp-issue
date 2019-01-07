package stomp.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import stomp.model.ConvertedFile;


@Controller
public class WebSocketController {

    private static final Logger LOGGER = LoggerFactory.getLogger(WebSocketController.class);

    @MessageMapping("/send/file")
    public void sendFile(ConvertedFile file) {
        LOGGER.info("File correctly received !");
    }

}
