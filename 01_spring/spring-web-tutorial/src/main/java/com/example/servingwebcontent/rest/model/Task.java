package com.example.servingwebcontent.rest.model;

public class Task {
    private final int id;
    private final String name;
    private final Boolean isDone;

    public Task(int id, String name, Boolean isDone) {
        this.id = id;
        this.name = name;
        this.isDone = false;
    }

    public int getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public Boolean getIsDone() {
        return isDone;
    }
}
