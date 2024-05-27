DELIMITER $$
Use PrograWeb2; $$

DROP PROCEDURE IF EXISTS DML_Venta $$

CREATE PROCEDURE DML_Ventas(
    op VARCHAR(2),
  pId_Venta int,
  pOpcion_Pago varchar (100), 
  pTotal int,
   pId_user_Comprador int
)
BEGIN


    IF op = 'I' THEN
      
            INSERT INTO Ventas (Opcion_Pago, Total , Id_user_Comprador)
            VALUES (pOpcion_Pago, pTotal, pId_user_Comprador);

    END IF;
    
      IF op = 'S' THEN
       
            SELECT Id_Venta, Opcion_Pago, Total , Fecha_Venta, Id_user_Comprador FROM vwVentas;
  
    END IF;
    
      
      IF op = 'S2' THEN
       
            SELECT Id_Venta, Opcion_Pago, Total , Fecha_Venta, Id_user_Comprador FROM Ventas where Id_user_Comprador = pId_user_Comprador;
  
    END IF;
    
      IF op = 'X' THEN

SELECT Id_Venta FROM Ventas
ORDER BY Id_Venta DESC
LIMIT 1;
    END IF;
	

END $$
DELIMITER ;
