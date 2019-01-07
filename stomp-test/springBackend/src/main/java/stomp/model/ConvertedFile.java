package stomp.model;


public class ConvertedFile {

    private String id;
    private String name;
    private String[] description;

    public String getId() {
        return id;
    }

    public ConvertedFile setId(String id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public ConvertedFile setName(String name) {
        this.name = name;
        return this;
    }

    public String[] getDescription() {
        return description;
    }

    public ConvertedFile setDescription(String[] description) {
        this.description = description;
        return this;
    }
}
