DELIMITER $$
Use  PrograWeb2; $$

DROP PROCEDURE IF EXISTS DML_ListProduct $$

CREATE PROCEDURE DML_ListProduct(
op VARCHAR(2),
  pid_ListasProductos int,
  pid_list int, 
  pid_product int ,
  pNomProduct varchar (200), 
  pDescriProd varchar (300),
  pimg MEDIUMBLOB,
pCantDeseada int
)
BEGIN
    DECLARE user_exist INT;
    DECLARE id INT;

    IF op = 'I' THEN
       
            INSERT INTO ListasProductos (id_list, id_product, NomProduct, DescriProd, img, CantDeseada)
            VALUES (pid_list, pid_product, pNomProduct, pDescriProd, pimg,  pCantDeseada);
          
    END IF;
    
    


    IF op = 'S' THEN
  
            SELECT id_ListasProductos, id_list, id_product, NomProduct, DescriProd, img, CantDeseada FROM ListasProductos WHERE id_list = pid_list;
        
    END IF;
    
      IF op = 'S2' THEN
  
            SELECT id_ListasProductos, id_list, id_product, NomProduct, DescriProd, img, CantDeseada FROM ListasProductos WHERE 
            id_list = pid_list and NomProduct LIKE CONCAT('%', pNomProduct, '%');
        
    END IF;
    
        IF op = 'S3' THEN
  
            SELECT id_ListasProductos, id_list, id_product, NomProduct, DescriProd, img, CantDeseada FROM ListasProductos 
            WHERE id_list = pid_list and id_product = pid_product;
        
    END IF;
    
 
    
    
     IF op = 'UP' THEN
        UPDATE ListasProductos SET CantDeseada = pCantDeseada
       WHERE id_ListasProductos = pid_ListasProductos;
    END IF;
    
        IF op = 'D' THEN
        delete from ListasProductos where id_ListasProductos = pid_ListasProductos;
        
    END IF;
    
    
        IF op = 'D2' THEN
        delete from ListasProductos where id_list = pid_list;
        
    END IF;
    
      IF op = 'D3' THEN
        delete from ListasProductos where id_product = pid_product;
        
    END IF;
    
     
    
    

END $$
DELIMITER ;

