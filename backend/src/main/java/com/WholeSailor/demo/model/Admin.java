package com.WholeSailor.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Admin extends User {
    public Admin(String username, String password, int role) {
		super(username, password, role);
		// TODO Auto-generated constructor stub
	}
	public int aid;
    public String first_name;
    public String last_name;
    public int gender;
    public String email;
    public String phone_no;
    public String photo_url;
}