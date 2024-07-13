import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import { CardSales } from '../../Components/Card/CardSales';
import { CardKPI } from '../../Components/Card/CardKPI';
import { CardPurchase } from '../../Components/Card/CardPurchase';
import { CardLol } from '../../Components/Card/CardLol';
import { CardEstadistic } from '../../Components/Card/CardEstadistic';
import './Dashboard.css';

export default function Dashboard() {
  useEffect(() => {}, []);

  console.log('Rendering Dashboard');
  return (
        <div className='graficos'>
      <h2 className='titulo'>Estadisticas de Clientes</h2>
      <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
      <CardEstadistic></CardEstadistic>
      <br></br>
      <div className='container mx-auto pt-10'>
      <div className=' grid gap-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
          <CardSales></CardSales>
          <CardPurchase></CardPurchase>
          <CardKPI></CardKPI>
          <CardLol></CardLol>
        </div>
      <div className='tarjetas'>
        <Card title="Cliente Nuevos" className='titulo_card'>
          <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
          <p className="m-0 dato">
            1200
          </p>
        </Card>
        <Card title="Clientes actuales" className='titulo_card'>
          <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
          <p className="m-0 dato">
            5000
          </p>
        </Card>
        <Card title="Clientes Totales" className='titulo_card'>
          <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
          <p className="m-0 dato">
            6200
          </p>
        </Card>
        <Card title="Clientes Perdidos" className='titulo_card'>
          <hr className="mb-3 mx-3 border-top-2 border-bottom-1" />
          <p className="m-0 dato">
            100
          </p>
        </Card>
      </div>
      </div>
    </div>
  );
}