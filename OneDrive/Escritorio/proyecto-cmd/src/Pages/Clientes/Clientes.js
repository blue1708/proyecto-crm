import React from 'react'
import { TabView, TabPanel} from 'primereact/tabview';
import { DataTable } from 'primereact/tabview';
import { Column } from 'primereact/tabview';

export default function Clientes() {
  const clientes = [
    { id: 1, nombre: 'Adrian Ivan', email: 'aitoivan04gmail.com', estatus_cliente: 'Vacio'}
  ]
  return (
    <div>
      <div className='clientes'>
      <h2 className='titulo'>Clinete Pirata</h2>
        <hr></hr>
        <div className='tabla'>
        <TabView>
    <TabPanel header="Header I">
        <p className="m-0">
          <DataTable value={clientes} className="p-datatable-responsive">
          <Column field="id" header="ID" />
          <Column field="nombre" header="Nombre" />
          <Column field="email" header="Email" />
          <Column field="estatus_cliente" header="Estatus" />
          </DataTable>
        </p>
    </TabPanel>
    <TabPanel header="Header II">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </TabPanel>
    <TabPanel header="Header III">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </TabPanel>
</TabView>
        </div>
      </div>
    </div>
  )
}
