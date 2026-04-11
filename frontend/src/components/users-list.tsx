import { useQueryUsers, type User } from "@/query/use-listUser";
import { Loader2 } from "lucide-react";

export function UsersList() {
    const { data: users, isLoading, isError, error } = useQueryUsers();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 m-4">
                <p className="text-red-800">Erro ao carregar usuários: {error?.message}</p>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Usuários</h1>
            {!users || users.length === 0 ? (
                <p className="text-gray-500">Nenhum usuário encontrado.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user: User) => (
                        <div
                            key={user.id}
                            className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                            <p className="text-sm text-gray-600 mt-2">ID: {user.id}</p>
                            <p className="text-sm text-gray-600">Saldo: ${user.balance}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
