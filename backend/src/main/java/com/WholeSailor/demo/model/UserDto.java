package com.WholeSailor.demo.model;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    Integer id;
    String username;
    String first_name;
    String last_name;
    Integer role;
    Timestamp date_joined;
}
