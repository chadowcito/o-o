function Projects() {
   return (
      <section className="py-5 bg-light">
         <div className="container">
            <h2 className="mb-5 text-center">Mis Proyectos</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
               <div className="col">
                  <div className="card h-100 shadow-sm">
                     <img src="https://media.istockphoto.com/id/1279024398/es/foto/chef-perro-cortando-pizza.jpg?s=612x612&w=0&k=20&c=XM2P7ZEDjkgYRB4MsJY6AVaIe6CYCCHQxvbtPeWAW2Q=" className="card-img-top" alt="Proyecto Papa Jhons" />
                     <div className="card-body">
                        <h5 className="card-title">Proyecto de almacen Papa Jhons</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, quisquam labore. Itaque, eligendi sequi dolores, molestias ab, optio repellat amet adipisci voluptatum recusandae harum consequuntur? Eaque sunt nostrum perspiciatis accusantium!</p>
                     </div>
                  </div>
               </div>
               <div className="col">
                  <div className="card h-100 shadow-sm">
                     <img src="https://ayuda.lirmi.com/hc/article_attachments/9578681726099/matri6.png" className="card-img-top" alt="Colaboracion con Microsoft" />
                     <div className="card-body">
                        <h5 className="card-title">Colaboración con Microsoft</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quidem itaque vel officiis soluta maxime aperiam provident expedita dolores omnis saepe sequi dolorem, commodi quam animi perspiciatis porro natus aspernatur.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Projects;