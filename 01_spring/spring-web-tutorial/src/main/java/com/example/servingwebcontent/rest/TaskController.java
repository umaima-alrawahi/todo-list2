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
        taskMap.put(1, new Task(1, "secondtask", true));
        taskMap.put(2, new Task(2, "thirdtask", false));
    }

    @GetMapping("/tasks")
    public Collection<Task> getAllTasks() {
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

    //mark as done, just fetch data, not work as backend
//    @RequestMapping ("/tasks/{id}")
//    public Task markTask(@PathVariable Integer id){ return taskMap.get(id);}
    @PutMapping ("/tasks/{id}")
    public Task markTask(@PathVariable Integer id) {
        taskMap.get(id).setIsDone(true);
        return taskMap.get(id);
    }

    @PostMapping ("/tasks/{id}")
    public Task updateTask(@PathVariable Integer id) {
        taskMap.get(id);
        return taskMap.get(id);
    }
    //public void markTask(@PathVariable Integer id){ taskMap.get(id).setIsDone(true);}
//    public Task markTask(@PathVariable Integer id){
//
//        Task thisTask = getTaskById(id);
//        taskMap.put(id, new Task(id, thisTask.getName(), true));
//        return thisTask;
//
//    }

//    @RequestMapping ("/tasks/{id}")
//    public Boolean markTask(@PathVariable Integer id){ return true;}



}
