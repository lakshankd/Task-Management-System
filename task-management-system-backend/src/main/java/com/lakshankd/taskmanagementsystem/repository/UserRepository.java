package com.lakshankd.taskmanagementsystem.repository;

import com.lakshankd.taskmanagementsystem.entity.ApplicationUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<ApplicationUser, String> {
}
