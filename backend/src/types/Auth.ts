export interface RegisterUserRequest {
    name: string;
    email: string;
    password: string;
}


export interface RegisterUserResponse {
    userId: string;
}

export interface LoginUserRequest {
    email: string;
    password: string;
}

export interface LoginUserResponse {
    userId: string;
    name: string;
}

