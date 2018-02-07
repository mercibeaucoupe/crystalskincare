package co.crystalskincare.Controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.crystalskincare.Service.UserService;
import co.crystalskincare.dto.UserDto;

@CrossOrigin
@RestController
@RequestMapping("users")
public class UserController {

	private UserService userService;
	
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping
	public List<UserDto> getAllUsers() {
	    return userService.getAll();
	}
	
	@PostMapping
	public UserDto addNewUser(@RequestBody UserGrabData data, HttpServletResponse response) {
		userService.createUser(data, response);
	}
	
	@GetMapping("/{username}")
	public UserDto getUserByUsername(@PathVariable String username, HttpServletResponse response) {
		return userService.getByUsername(username, response);
	}
	
	@PatchMapping("/{username}")
	public UserDto updateProfile(@PathVariable String username,
			@RequestBody UserGrabData data, HttpServletResponse response) {
		return userService.update(username, data, response);
	}
	
	@DeleteMapping("/{username")
	public UserDto deleteUser(@PathVariable String username, @RequestBody credentials, HttpServletResponse) {
		return userService.delete(username, credentials, response);
	}
}
