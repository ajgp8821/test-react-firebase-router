import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const User = () => {

  const [user, setUser] = useState({});
  const [address, setAddress] = useState({});
  const [geo, setGeo] = useState({});
  const [company, setCompany] = useState({});
  const { id } = useParams();

  const getUser = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.data;
    const address = await user.address;
    const geo = await address.geo;
    const company = await user.company;
    console.log(JSON.stringify(user));

    setUser(user);
    setAddress(address);
    setGeo(geo);
    setCompany(company);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2>Usuario</h2>
      <div>
        <p>Nombre: {user.name}</p>
        <p>Apellido: {user.username}</p>
        <p>Correo: {user.email}</p>
        <p>Teléfono: {user.phone}</p>
        
        <p>Dirección:</p>
        <div className="ml-3">
          <p>Calle: {address.street}</p>
          <p>Habitación: {address.suite}</p>
          <p>Ciudad: {address.city}</p>
          <p>Código Postal: {address.zipcode}</p>
          <p>Geolocalización:</p>
          <div className="ml-3">
            <p>Latitud: {geo.lat}</p>
            <p>Longitud: {geo.lng}</p>
          </div>
        </div>
        
        <p>Compañía:</p>
        <div className="ml-3">
          <p>Nombre de la compañía: {company.name}</p>
          <p>Frase de la compañía: {company.name}</p>
          <p>Otro de la compañía: {company.bs}</p>
        </div>

        <p>Página web: <a href={`http://${user.website}`}>{user.website}</a></p>
      </div>
    </div>
  );
}

export default User;
