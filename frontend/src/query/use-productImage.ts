import { useQuery, QueryClient, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:5432/api";

export interface Image {
    id: number;
    image: string;
}

export function useQueryImages() {
    return useQuery({
        queryKey: ["image"],
        queryFn: async (): Promise<Image[]> => {
            const response = await fetch(`${API_URL}/payment`);
            if (!response.ok) {
                throw new Error("Erro ao carregar imagens");
            }
            return response.json();
        }, 
    });
}

export function useQueryImage(){
    const queryClient = useQueryClient();

    
}