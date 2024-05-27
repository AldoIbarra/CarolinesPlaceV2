DELIMITER $$
Use PrograWeb2; $$

-- Verificar y eliminar el procedimiento si ya existe
DROP PROCEDURE IF EXISTS  DML_User $$

CREATE PROCEDURE DML_User(
    op VARCHAR(2),
    pid_user INT,
    pNombreUsuario VARCHAR(80),
    pEmail VARCHAR(50),
    pContraseña VARCHAR(30),
    pFecha_Nac date,
    pTipo varchar (20)
)
BEGIN
    DECLARE user_exist INT;
    DECLARE id INT;

    IF op = 'I' THEN
        SET user_exist = (SELECT COUNT(*) FROM Usuarios WHERE Email = pEmail);
        IF user_exist = 0 THEN
            INSERT INTO Usuarios (NombreUsuario, Email, Contraseña, Fecha_Nac, Tipo  )
            VALUES (pNombreUsuario, pEmail, pContraseña, pFecha_Nac, pTipo);
            SET id = LAST_INSERT_ID();
        ELSE
            SET id = 0;
        END IF;
    END IF;


    IF op = 'S' THEN
        SET user_exist = (SELECT COUNT(*) FROM Usuarios WHERE Email = pEmail AND Contraseña = pContraseña);
        IF user_exist > 0 THEN
            SELECT id_user,Tipo, Email Fecha_Nac, NombreUsuario FROM Usuarios WHERE Email = pEmail AND Contraseña = pContraseña;
         
        ELSE
            SET id = 0;
            SELECT id;
        END IF;
    END IF;
    
     IF op = 'QP' THEN
      
            SELECT id_user,Tipo, Email, Fecha_Nac, NombreUsuario FROM Usuarios WHERE Email = pEmail AND Contraseña = pContraseña;
	
    END IF;
    
    
    
     IF op = 'S2' THEN
       
            SELECT id_user,Tipo, Contraseña,Fecha_Creacion, Email, Fecha_Nac, NombreUsuario
            FROM  Usuarios WHERE  id_user = pid_user ;
  
    END IF;
    
        
     IF op = 'SS' THEN
       
            SELECT id_user, NombreUsuario,Tipo, Contraseña, Fecha_Creacion, Email, Fecha_Nac
            FROM  Usuarios  ;
  
    END IF;
    
      IF op = 'XD' THEN
       
            SELECT id_user,Tipo, Contraseña , Fecha_Creacion, Email, Fecha_Nac, NombreUsuario FROM Usuarios WHERE  Email = pEmail ;
  
    END IF;
    
    
    
    
     IF op = 'SE' THEN
            SELECT * FROM Usuarios WHERE NOT id_user = pid_user AND NombreUsuario LIKE CONCAT('%', pNombreUsuario, '%');
        END IF;
        
            IF op = 'X' THEN
            SELECT * FROM Usuarios WHERE NOT id_user = pid_user;
        END IF;
        
        
        
          IF op = 'X2' THEN
            SELECT id_user,Tipo, Email, Fecha_Nac,NombreUsuario FROM Usuarios WHERE Email = pEmail;
        END IF;
        
          IF op = 'YO' THEN
            SELECT id_user,Tipo, Email, Fecha_Nac, NombreUsuario FROM Usuarios WHERE Tipo = 'Usuario';
        END IF;

 If op = 'UP' then 

			Update Usuarios set NombreUsuario = pNombreUsuario, Email = pEmail, Fecha_Nac = pFecha_Nac
            WHERE id_user = pid_user;
End IF;


 If op = 'U4' then 

			Update Usuarios set NombreUsuario = pNombreUsuario, Email = pEmail, Fecha_Nac = pFecha_Nac
            WHERE id_user = pid_user;
End IF;

 If op = 'U2' then 

			Update Usuarios set Contraseña = pContraseña
            WHERE id_user = pid_user;
End IF;

 If op = 'U3' then 

			 SELECT id_user, NombreUsuario, contraseña FROM Usuarios WHERE id_user = pid_user AND Contraseña = pContraseña;
           
End IF;

END $$
DELIMITER ;





