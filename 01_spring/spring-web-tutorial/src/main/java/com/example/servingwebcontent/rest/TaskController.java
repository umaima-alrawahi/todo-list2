package com.example.servingwebcontent.rest;

import com.example.servingwebcontent.rest.model.Task;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.TreeMap;


@RestController
@CrossOrigin
public class TaskController {

    private final TreeMap<Integer, Task> taskMap;

    public TaskController() {
        taskMap = new TreeMap<>();
        taskMap.put(0, new Task(0, "firsttask", false));
        taskMap.put(1, new Task(1, "secondtask", false));
        taskMap.put(2, new Task(2, "thirdtask", false));
    }

    @GetMapping("/tasks")
    public Collection<Task> getAllProducts() {
        return taskMap.values();
    }

    @GetMapping("/tasks/{id}")
    public Task getTaskById(@PathVariable Integer id) {
        return taskMap.get(id);
    }


    @PostMapping("/tasks")
    public void createTask(@RequestBody Task task) {
        taskMap.put(task.getId(), task);
    }

    @DeleteMapping("/tasks/{id}")
    //first try
    //public Boolean deleteTask(@PathVariable Integer id){ return true;}
    //secound try
    public void deleteTask(@PathVariable Integer id){ taskMap.remove(id);}

}
