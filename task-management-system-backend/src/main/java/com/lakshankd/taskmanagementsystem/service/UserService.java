package com.lakshankd.taskmanagementsystem.service;

import com.lakshankd.taskmanagementsystem.entity.ApplicationUser;
import com.lakshankd.taskmanagementsystem.entity.Role;
import com.lakshankd.taskmanagementsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private PasswordEncoder encoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("In user detail service.");

        if (!username.equals("Ethan")) throw new UsernameNotFoundException("Not Ethan");

        Set<Role> roles = new HashSet<>();
        roles.add(new Role(1,"USER"));

        return new ApplicationUser(1, "Ethan", encoder.encode("password"), roles);
    }
}
