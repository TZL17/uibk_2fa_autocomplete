# uibk_2fa_autocomplete

Tutorial für OLAT/LFU 2FA autocompletion.

1. Rechts oben geht ihr auf Extensions/Erweiterungen und dann Manage Extensions:

![image](https://github.com/user-attachments/assets/b171973c-b8c1-46e4-bfca-23b048034045)

2. Da sucht ihr nach TamperMonkey und lädt es runter (ist nur einer von vielen Script extensions):

![image](https://github.com/user-attachments/assets/cc6828cd-793b-44d6-b69a-ad627d8a03b7)

3. Nachdem es runtergeladen ist muss man es aufmachen:

![image](https://github.com/user-attachments/assets/f3c95304-1593-4188-81af-d0e549056ffb)

4. Auf create new script klicken:

![image](https://github.com/user-attachments/assets/cad589db-ce4d-4e46-8d0d-b898aeceade8)

5. Danach folgenden Inhalt:

![image](https://github.com/user-attachments/assets/fa8a62e4-dffa-4124-a8e8-dada11cabd34)

ersetzen durch den Inhalt aus 
[UIBK_2FA_script.js](./UIBK_2FA_script.js)
(Einfach den Inhalt löschen, und dann aus dem Script alles markieren, dann Strg + C und danach Strg + V)

Ganz am Anfang findet ihr dann folgendes Feld:

![image](https://github.com/user-attachments/assets/8f91c41c-388b-4ae0-8dab-8c738cc538ae)

6. Um diesen Code zu bekommen meldet ihr euch unter https://accounts.uibk.ac.at/ an und geht dann auf:
![image](https://github.com/user-attachments/assets/522eb561-e5e6-4a4e-98e7-77ce6102d798)
![image](https://github.com/user-attachments/assets/c8affe08-a2ec-440f-9e9f-c855bae11b7a)

8. Links unten klickt ihr auf den Link um den Code zu erhalten
![image](https://github.com/user-attachments/assets/5f233c9b-b950-4485-b694-ee346a7efd66)

!!! Ihr müsst diesen QR mit einer App aktivieren, damit der Code auch gültig ist !!!

8. Danach fügt ihr den Code hier ein:

![image](https://github.com/user-attachments/assets/cf9ce205-94b0-4cc7-b665-3ceafa059447)

wichtig ist, dass der Code unbedingt zwischen die beiden '' eingefügt wird.

9. Zum speichern drückt ihr Strg + S.

Recht oben unter "installed scripts" könnt ihr dann schauen ob's aktiv ist oder nicht
![image](https://github.com/user-attachments/assets/119d4c1e-395e-4ee5-b696-5f6a7795bfee)

![image](https://github.com/user-attachments/assets/9bbfd3b1-0199-406d-86d8-4dbd678c2505)

Optional: Es kann sein, dass euer Browser die skripte erst zulässt wenn ihr Dev Mode anmacht, aber der meldet sich von selbst. 

Falls alles gepasst habt könnt ihr es auf Olat testen. Nachdem ihr login drückt sollte beim 2FA check der code von selbst ausgeführt werden

