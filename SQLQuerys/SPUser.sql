DELIMITER $$
Use PrograWeb2; $$

-- Verificar y eliminar el procedimiento si ya existe
DROP PROCEDURE IF EXISTS  DML_User $$

CREATE PROCEDURE DML_User(
    op VARCHAR(2),
    pid_user INT,
    pNombre VARCHAR(80),
    pNombreUsuario VARCHAR(80),
    pEmail VARCHAR(50),
    pContraseña VARCHAR(30),
    pSexo VARCHAR(30),
	pimg MEDIUMBLOB,
    pFecha_Nac date,
    pTipo varchar (20)
)
BEGIN
    DECLARE user_exist INT;
    DECLARE id INT;

    IF op = 'I' THEN
        SET user_exist = (SELECT COUNT(*) FROM Usuarios WHERE Email = pEmail);
        IF user_exist = 0 THEN
            INSERT INTO Usuarios (Nombre, NombreUsuario, Email, Contraseña, Sexo,  img, Fecha_Nac, Publico, Tipo  )
            VALUES (pNombre, pNombreUsuario, pEmail, pContraseña, pSexo, pimg, pFecha_Nac, 1, pTipo);
            SET id = LAST_INSERT_ID();
        ELSE
            SET id = 0;
        END IF;
    END IF;


    IF op = 'S' THEN
        SET user_exist = (SELECT COUNT(*) FROM Usuarios WHERE Email = pEmail AND Contraseña = pContraseña);
        IF user_exist > 0 THEN
            SELECT id_user,Tipo, Email, img, Fecha_Nac, NombreUsuario, Nombre FROM Usuarios WHERE Email = pEmail AND Contraseña = pContraseña;
         
        ELSE
            SET id = 0;
            SELECT id;
        END IF;
    END IF;
    
     IF op = 'QP' THEN
        SET user_exist = (SELECT COUNT(*) FROM Usuarios WHERE Email = pEmail AND Contraseña = pContraseña);
        IF user_exist > 0 THEN
            SELECT id_user,Tipo, Email, Fecha_Nac, NombreUsuario, Nombre FROM Usuarios WHERE Email = pEmail AND Contraseña = pContraseña;
         
        ELSE
            SET id = 0;
            SELECT id;
        END IF;
    END IF;
    
    
    
     IF op = 'S2' THEN
       
            SELECT id_user,Tipo, Contraseña, Sexo , Fecha_Creacion, Email,img, Fecha_Nac, Nombre, NombreUsuario
            FROM vwUsuario WHERE  id_user = pid_user ;
  
    END IF;
    
      IF op = 'XD' THEN
       
            SELECT id_user,Tipo, Contraseña, Sexo , Fecha_Creacion, Email,img, Fecha_Nac, Nombre, NombreUsuario FROM Usuarios WHERE  Email = pEmail ;
  
    END IF;
    
    
    
    
     IF op = 'SE' THEN
            SELECT * FROM Usuarios WHERE NOT id_user = pid_user AND NombreUsuario LIKE CONCAT('%', pNombreUsuario, '%');
        END IF;
        
            IF op = 'X' THEN
            SELECT * FROM Usuarios WHERE NOT id_user = pid_user;
        END IF;
        
        
        
          IF op = 'X2' THEN
            SELECT id_user,Tipo, Email,img, Fecha_Nac, Nombre, NombreUsuario FROM Usuarios WHERE Email = pEmail;
        END IF;
        
          IF op = 'YO' THEN
            SELECT id_user,Tipo, Email,img, Fecha_Nac, Nombre, NombreUsuario FROM Usuarios WHERE Tipo = 'Usuario';
        END IF;

 If op = 'UP' then 

			Update Usuarios set Nombre = pNombre, NombreUsuario = pNombreUsuario, Email = pEmail, Sexo = pSexo, Fecha_Nac = pFecha_Nac, img = pimg
            WHERE id_user = pid_user;
End IF;


 If op = 'U4' then 

			Update Usuarios set Nombre = pNombre, NombreUsuario = pNombreUsuario, Email = pEmail, Sexo = pSexo, Fecha_Nac = pFecha_Nac
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

