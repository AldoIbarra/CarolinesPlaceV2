DELIMITER $$
Use PrograWeb2; $$

-- Verificar y eliminar el procedimiento si ya existe
DROP PROCEDURE IF EXISTS DML_Productos $$

CREATE PROCEDURE DML_Productos(
op VARCHAR(2),
pid_Producto int ,
pNombreProd varchar (100) ,
pDescripcionProd varchar (300) , 
pimg MEDIUMBLOB,
pPrecio int ,
pCantDisponible int ,
pCategoria int,
puser_ide int
)
BEGIN
    DECLARE user_exist INT;
    DECLARE id INT;

    IF op = 'I' THEN
       
            INSERT INTO Productos (NombreProd, DescripcionProd, img,  Precio, CantDisponible, Categoria, user_ide)
            VALUES (pNombreProd, pDescripcionProd, pimg, pPrecio, pCantDisponible, pCategoria, puser_ide);
          
    END IF;


    IF op = 'S' THEN
  
            SELECT id_Producto, NombreProd, DescripcionProd, img, Precio, CantDisponible, 
            Categoria, user_ide FROM Productos WHERE id_Producto = pid_Producto;
        
    END IF;
    
        IF op = 'S2' THEN
  
            SELECT id_Producto, NombreProd, DescripcionProd, img,  Precio, CantDisponible, Categoria, user_ide FROM Productos ;
        
    END IF;
    
       IF op = 'KH' THEN
  
            SELECT id_Producto, NombreProd, DescripcionProd, img, Precio, CantDisponible, Categoria, user_ide FROM Productos where user_ide = puser_ide ;
        
    END IF;
    
    
         IF op = 'BF' THEN
  
            SELECT  NombreProd FROM Productos where NOT user_ide = puser_ide AND NombreProd LIKE CONCAT('%', pNombreProd, '%');
        
    END IF;
    
    
       IF op = 'FJ' THEN
  
            SELECT id_Producto, NombreProd, DescripcionProd, img, img2, img3, VideoProd, Precio, CantDisponible, Categoria, user_ide FROM Productos where NOT user_ide = puser_ide AND NombreProd LIKE CONCAT('%', pNombreProd, '%');
        
    END IF;
    
      IF op = 'JF' THEN
  
            SELECT id_Producto, NombreProd, DescripcionProd, img, img2, img3, VideoProd, Precio, CantDisponible, Categoria, user_ide FROM Productos where Autorizado = 1 and NOT user_ide = puser_ide AND NombreProd = pNombreProd;
        
    END IF;
    
    
      IF op = 'TX' THEN
  SELECT id_Producto, NombreProd, DescripcionProd, img,  Precio, CantDisponible, Categoria, user_ide
    FROM Productos
    WHERE Autorizado = 1
    and NOT user_ide = puser_ide
    AND NombreProd LIKE CONCAT('%', pNombreProd, '%')
    ORDER BY Precio DESC; -- Ordenar por precio de mayor a menor
END IF;


         IF op = 'S4' THEN
  
            SELECT id_Producto, NombreProd, DescripcionProd, img, img2, img3, VideoProd, Precio, CantDisponible, Valoracion, Cotizar,
            Categoria, user_ide, Autorizado FROM Productos where user_ide = puser_ide;
        
    END IF;
    
                  IF op = 'UC' THEN
  
  UPDATE Productos SET CantDisponible = pCantDisponible
       WHERE id_Producto = pid_Producto;
        
    END IF;
    

    
     If op = 'U4' then 

			UPDATE Productos SET NombreProd = pNombreProd, DescripcionProd = pDescripcionProd, Precio = pPrecio,
            CantDisponible = pCantDisponible, Categoria = pCategoria
           WHERE id_Producto = pid_Producto;
End IF;
  
    

END $$
DELIMITER ;
