DELIMITER $$
Use  PrograWeb2; $$
-- Verificar y eliminar el procedimiento si ya existe
DROP PROCEDURE IF EXISTS  DML_Listas $$

CREATE PROCEDURE DML_Listas(
    op VARCHAR(2),
    pid_Lista INT,
    pNombreLista VARCHAR(80),
    pDescripcionLista VARCHAR(300),
	pUsua_Id  int
)
BEGIN


    IF op = 'I' THEN
      
            INSERT INTO Listas (NombreLista, DescripcionLista , Usua_Id)
            VALUES (pNombreLista, pDescripcionLista, pUsua_Id);

    END IF;
    
        IF op = 'DL' THEN
      
           delete from Listas where id_Lista = pid_Lista;

    END IF;
    
    
      IF op = 'S' THEN
       
            SELECT NombreLista, DescripcionLista FROM Listas ORDER BY id_Lista;
  
    END IF;
    
          IF op = 'S3' THEN
       
           SELECT NombreLista, DescripcionLista, Usua_Id, id_Lista FROM Listas where NombreLista LIKE CONCAT('%', pNombreLista, '%')  AND NOT NombreLista = 'Carrito';
  
    END IF;


    
     IF op = 'S2' THEN
       
            SELECT id_Lista, NombreLista, DescripcionLista, Usua_Id FROM Listas WHERE  Usua_Id = pUsua_Id AND NOT NombreLista = 'Carrito';
  
    END IF;
    

     IF op = 'S5' THEN
       
            
            SELECT id_Lista, NombreLista, DescripcionLista FROM Listas ORDER BY id_Lista;
  
    END IF;
    
    
    
     IF op = 'S9' THEN
       
            
            SELECT id_Lista, NombreLista, DescripcionLista, Usua_Id FROM Listas WHERE id_Lista = pid_Lista ;
  
    END IF;
    
         IF op = 'W' THEN
       
            
            SELECT id_Lista, NombreLista, DescripcionLista FROM Listas WHERE Usua_Id = pUsua_Id AND NombreLista = 'Carrito' ;
  
    END IF;
    
       
    

END $$
DELIMITER ;



CALL DML_Listas('I',null,'Carrito','cosas pa mi cumple',1);
