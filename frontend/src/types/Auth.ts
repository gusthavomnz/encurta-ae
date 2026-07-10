export interface LoginUserRequest {
    email: string,
    password: string
}


export interface LoginUserResponse {
    userId: string
    name: string
}

export interface RegisterUserRequest {
    name: string;
    email: string;
    password: string;
}

export interface RegisterUserResponse {
    message: string,
    userId: string

}
