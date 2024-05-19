import { deleteUrl } from "../controllers/url.controllers";

test("debería eliminar la URL del usuario", async () => {
    // Simulamos una solicitud HTTP DELETE con los parámetros necesarios
    const req = {
      params: {
        userId: 'userIdExistente',
        id: 'idExistente'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };

    // Llamamos a la función deleteUrl con los objetos req y res simulados
    await deleteUrl(req, res);

    // Verificamos si se llama a res.status con el código de estado correcto
    expect(res.status).toBe(200);
    // Verificamos si se llama a res.send con el mensaje correcto
    expect(res.send).toBe({ data: "Url eliminada" });
});
