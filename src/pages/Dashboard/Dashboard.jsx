function Dashboard() {
  return (
    <section>
      <h1>Dashboard</h1>
      <p>Here we will display:</p>
      <ul>
        <li>Pacientes creados</li>
        <li>
          Censo, atributo: origen de la emergencia: herido de bala, fractura
        </li>
        <li>super admin -- permisos puede ver todo</li>
        <li>
          admin -- permisos ver stadisticas y agregar usuarios no poder borrar
          atributos ni notas
        </li>
        <li>agente -- permisos: solo agregar notas y atributos</li>
      </ul>
    </section>
  );
}

export default Dashboard;
