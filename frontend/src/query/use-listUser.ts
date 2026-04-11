import { useQuery, QueryClient, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:5432/api";

export interface User {
    id: number;
    name: string;
    balance: number;
}

export function useQueryUsers() {
    return useQuery({
        queryKey: ["users"],
        queryFn: async (): Promise<User[]> => {
            const response = await fetch(`${API_URL}/users`);
            if (!response.ok) {
                throw new Error("Erro ao carregar usuários");
            }
            return response.json();
        },
    });
}

export function useQueryUser(){
    const queryClient = useQueryClient();

    
}