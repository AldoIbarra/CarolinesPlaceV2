DELIMITER $$

Use PrograWeb2; $$

DROP PROCEDURE IF EXISTS DML_Productos_Ventas $$
CREATE PROCEDURE DML_Productos_Ventas(
    op VARCHAR(2),
  pID_Productos_Ventas int ,
  pID_Venta int , 
  pID_producto int,
  pNombreProd varchar (100), 
  pPrecio int ,
  pCantidad int ,
    pid_Vendedor int 
)
BEGIN


    IF op = 'I' THEN
      
            INSERT INTO Productos_Ventas (ID_Venta , ID_producto, NombreProd , Precio ,Cantidad , id_Vendedor)
            VALUES ( pID_Venta , pID_producto, pNombreProd , pPrecio ,pCantidad , pid_Vendedor );

    END IF;
    
      IF op = 'S' THEN
       
     SELECT * FROM Productos_Ventas;
  
    END IF;
    
          IF op = 'S2' THEN
       
        SELECT
        ID_Productos_Ventas,
        ID_Venta,
        ID_producto,
        NombreProd,
        Precio,
        Cantidad,
        id_Vendedor,
        Fecha_Venta_Prod
    FROM Productos_Ventas
    WHERE ID_Venta = pID_Venta;
  
    END IF;
    
    
      IF op = 'S4' THEN
       
            SELECT ID_Productos_Ventas, ID_Venta , ID_producto, NombreProd , Precio ,Cantidad, id_Vendedor,  Fecha_Venta_Prod
            FROM Productos_Ventas where id_Vendedor  = pid_Vendedor  ;
  
    END IF;
    
          IF op = 'S5' THEN
  
       SELECT NombreProd, COUNT(*) AS Ventas
FROM Productos_Ventas
GROUP BY NombreProd
ORDER BY Ventas DESC
LIMIT 3;
        
    END IF;
    
          IF op = 'UP' THEN
       
        	Update Productos_Ventas set Valoracion = pValoracion
            WHERE ID_Productos_Ventas = pID_Productos_Ventas;
  
    END IF;
    

	

END $$
DELIMITER ;

