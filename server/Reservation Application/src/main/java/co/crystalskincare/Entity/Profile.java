package co.crystalskincare.Entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Profile {
	
	private String firstName;
	
	private String lastName;
	
	@Column(nullable = false)
	private String email;
	
	@Column(nullable = false)
	private String phoneNumber;
	
	public Profile(String firstName, String lastName, String email, String phoneNumber) {
	    this.firstName = firstName;
	    this.lastName = lastName;
	    this.email = email;
	    this.phoneNumber = phoneNumber;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
}
