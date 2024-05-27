DELIMITER $$
Use PrograWeb2; $$


-- Verificar y eliminar el procedimiento si ya existe
DROP PROCEDURE IF EXISTS  DML_Categoria $$
 
CREATE PROCEDURE DML_Categoria(
    op VARCHAR(2),
    pid_Categoria INT,
    pNombreCateg VARCHAR(80),
    pDescripcionCat VARCHAR(300),
      pUsuario_Id int
)
BEGIN
    DECLARE user_exist INT;
    DECLARE id INT;

    IF op = 'I' THEN
      
            INSERT INTO Categoria (NombreCateg, DescripcionCat, Usuario_Id)
            VALUES (pNombreCateg, pDescripcionCat, pUsuario_Id);

    END IF;
    
      IF op = 'S' THEN
       
      SELECT NombreCateg, DescripcionCat, Usuario_Id, id_Categoria FROM vwCategorias;

  
    END IF;
    
          IF op = 'S3' THEN
       
            SELECT NombreCateg, DescripcionCat, Usuario_Id  FROM Categoria where NombreCateg LIKE CONCAT('%', pNombreCateg, '%');
  
    END IF;


    
     IF op = 'S2' THEN
       
            SELECT id_Categoria,NombreCateg, DescripcionCat, Usuario_Id FROM Categoria WHERE  id_Categoria = pid_Categoria;
  
    END IF;
    

     IF op = 'S5' THEN
       
            SELECT id_Categoria,NombreCateg, DescripcionCat FROM Categoria ORDER BY id_Categoria;
  
    END IF;
    

END $$
DELIMITER ;

