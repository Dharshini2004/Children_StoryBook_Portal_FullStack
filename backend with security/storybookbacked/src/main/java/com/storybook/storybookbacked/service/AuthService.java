package com.storybook.storybookbacked.service;

import com.storybook.storybookbacked.dto.request.LoginRequest;
import com.storybook.storybookbacked.dto.request.RegisterRequest;
import com.storybook.storybookbacked.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);

    String createAdmin();
}
