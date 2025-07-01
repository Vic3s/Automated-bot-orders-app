package com.server.backend.services;

import com.server.backend.models.AccountModel;
import com.server.backend.models.UserPrincipal;
import com.server.backend.repo.AccountRepo;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class _UserDetailsService implements UserDetailsService {

    @Autowired
    AccountRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AccountModel account = repo.findByUsername(username);

        if(account == null){
            System.out.println("User Not Found");
            throw new UsernameNotFoundException("User Not Found");
        }

        return new UserPrincipal(account);
    }
}
