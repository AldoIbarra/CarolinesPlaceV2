CREATE DATABASE PrograWeb2;

USE PrograWeb2;


CREATE TABLE Usuarios(
id_user int not null auto_increment COMMENT 'Identificador unico de cada usuario',
NombreUsuario varchar (80) not null COMMENT 'Nombre de usuario',  
Email varchar (50) not null COMMENT 'Email del usuario',
Contraseña varchar (30) not null COMMENT 'Contraseña del usuario',
Fecha_Nac date COMMENT 'Fecha de nacimiento del usuario',
Fecha_Creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de creacion del usuario',
Tipo varchar (20) not null COMMENT 'Tipo de usuario, Vendedor o Comprador',
primary key (id_user)
);

drop TABLE Productos_Ventas;
drop TABLE Ventas;
drop TABLE ListasProductos;
drop TABLE Listas;
drop TABLE Productos;
drop table Categoria;
drop table Usuarios;
select * from Usuarios;

  CREATE TABLE Categoria(
  id_Categoria int not null auto_increment COMMENT 'Identificador unico de la categoria',
  NombreCateg varchar (80) not null COMMENT 'Nombre de la categoria', 
  DescripcionCat varchar (300) not null COMMENT 'Descripcion de la categoria', 
  Usuario_Id int not null COMMENT 'Id del usuario que creó la categoria',
  primary key (id_Categoria),
  CONSTRAINT FK_Id_User FOREIGN KEY (Usuario_Id) REFERENCES Usuarios(id_user)
  );
  

 
 CREATE TABLE Productos(
id_Producto int not null auto_increment COMMENT 'Identificador unico de el producto',
NombreProd varchar (100) not null COMMENT 'Nombre de el producto', 
DescripcionProd varchar (300) not null COMMENT 'Descripcion de el producto', 
img MEDIUMBLOB not null COMMENT 'Primera imagen del producto',
Precio int COMMENT 'El precio del producto, cuanto cuesta',
CantDisponible int not null COMMENT 'Inventario disponible de el producto',
Categoria int not null COMMENT 'Categoria a la que pertenece el producto',
user_ide int not null COMMENT 'ID del usuario o vendedor de el producto',
primary key (id_Producto),
CONSTRAINT FK_Id_Categoria FOREIGN KEY (Categoria) REFERENCES Categoria(id_Categoria),
CONSTRAINT FK_Id_usuario FOREIGN KEY (user_ide) REFERENCES Usuarios(id_user)
);

    CREATE TABLE Listas(
  id_Lista int not null auto_increment COMMENT 'Identificador unico de la lista',
  NombreLista varchar (80) not null COMMENT 'Nombre de la lista', 
  DescripcionLista varchar (300) not null COMMENT 'Descripcion de la lista', 
  Usua_Id int not null COMMENT 'Id del usuario al que pertenece la lista',
  primary key ( id_Lista),
  CONSTRAINT FK_Id_Us FOREIGN KEY (Usua_Id) REFERENCES Usuarios(id_user)
  );
  
    select * from Listas;
    
    CREATE TABLE ListasProductos(
  id_ListasProductos int not null auto_increment COMMENT 'Identificador unico de cada producto de la lista',
  id_list int not null COMMENT 'ID de la lista al que pertenece el producto', 
  id_product int not null COMMENT 'ID del producto que esta en la lista',
  NomProduct varchar (200) not null COMMENT 'Nombre de el producto de la lista', 
  DescriProd varchar (300) not null COMMENT 'Descripcion de el producto de la lista', 
  img MEDIUMBLOB not null COMMENT 'Imagen de el producto de la lista',
  CantDeseada int not null COMMENT 'Cantidad deseada del producto',
  primary key (id_ListasProductos),
  CONSTRAINT FK_Id_Lista FOREIGN KEY (id_list) REFERENCES Listas(id_Lista),
  CONSTRAINT FK_Id_Productito FOREIGN KEY (id_product) REFERENCES Productos(id_Producto)
  );
  
 
       

  CREATE TABLE Ventas(
  Id_Venta int not null auto_increment COMMENT 'Identificador unico de la venta',
  Opcion_Pago varchar (100) not null COMMENT 'Opcion de pago utilizada en la venta', 
  Total int not null COMMENT 'Total de pago de la venta',
  Fecha_Venta TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha de la venta',
   Id_user_Comprador int not null COMMENT 'ID del usuario que realizó la compra',
  primary key (Id_Venta),
    CONSTRAINT FK_Id_Usersito FOREIGN KEY ( Id_user_Comprador) REFERENCES Usuarios(id_user)
  );
  
  
  
    CREATE TABLE Productos_Ventas(
  ID_Productos_Ventas int not null auto_increment COMMENT 'Identificador unico de cada producto vendido de la venta',
  ID_Venta int not null COMMENT 'ID de la venta a la cual pertenece el producto vendido', 
  ID_producto int not null COMMENT 'ID del producto vendido',
  NombreProd varchar (100) not null COMMENT 'Nombre del producto vendido', 
  Precio int not null COMMENT 'Precio del producto vendido',
  Cantidad int not null COMMENT 'Cantidad de producto vendido',
  id_Vendedor int not null COMMENT 'ID del vendedor del producto',
 Fecha_Venta_Prod TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT 'Fecha en que se realizo la venta de el producto',
  primary key (ID_Productos_Ventas),
  CONSTRAINT FK_Id_Venta FOREIGN KEY (ID_Venta) REFERENCES Ventas(Id_Venta),
  CONSTRAINT FK_Id_Productazo FOREIGN KEY (ID_producto) REFERENCES Productos(id_Producto),
   CONSTRAINT FK_Id_Vendedorsito FOREIGN KEY (id_Vendedor) REFERENCES Usuarios(id_user)
  );
  
  

  
  