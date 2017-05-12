var list = function(){
	return {
		apps : ['Mac OSX 10.12.4 with Touchbar', 'DigitalOcean VPS Ubuntu 16.04'],
		device_types : ['Type 1','Type 2','Type 3','Type 4','Type 5'],
		device_sub_types : {
			"Type 1" : [1,2,3,4,5],
			"Type 2" : [6,7,8,9,10],
			"Type 3" : [11,12,13],
			"Type 4" : [14,15],
			"Type 5" : [16,17]
		},
		variable_status_list : ['0xc0','0x80','0x40'],
		variable_value_list : {
			"Type 1" : ['Flow','Discharge P','Suction P','Strainer dP','Seal Pressure','Seal Level'],
			"Type 2" : ['Flow','Discharge P','Suction P','Strainer dP','Seal Pressure','Seal Level'],
			"Type 3" : ['Vibration 1','Peakvue 1','Vibration 2','Peakvue 2','Bear Temp 1','Bear Temp 2'],
			"Type 4" : ['Vibration 1','Peakvue 1','Vibration 2','Peakvue 2','Bear Temp 1','Bear Temp 2'],
			"Type 5" : ['Hot Side Flow','Hot Side Inlet Temp','Hot Side Outlet Temp','Hot Side Pressure','Cold Side Fow','Cold Side Inlet Temp','Cold Side Outlet Temp','Cold Side Pressure'],
		},
		update_rate_options : [1,2,3,4,5,6,7,8,9,10,30,60,120,300,600,900,1200,1500,1800],
		settings : {
			"Points X Req" : 1,
			"endpoint" : 'http://ENDPOINT_URL_AND_PORT_HERE/'
		},
		type : {
			PV : ['Random Positive Integer','Random Negative Integer','32Bit Int','64Bit Int','Base64 String'],
			AP : ['Small','Medium','Large','Extra-large'],
			IR : ['Small','Medium','Large','Extra-large'],
			SD : ['Random Positive Integer','Random Negative Integer','32Bit Int','64Bit Int','Base64 String'],
			ED : ['Random Positive Integer','Random Negative Integer','32Bit Int','64Bit Int','Base64 String']
		},
		units : {
			"Type 1" : [
				"InH2O 68F",  //PU_inH2OAt68F:  2.4864110E+02, //Inch of water at 68F                  
				"InHg 0C",    //PU_inHgAt0C: 3.3863800E+03, // Inch of mercury at 0C                   
				"FtH2O 68F",  //PU_ftH20At68F: 2.9836932E+03, // Foot of water at 68F                  
				"mmH2O 68F",  //PU_mmH20At68F: 9.7890218E+00, // Milimeter of water at 68F                    
				"mmHg 0C",    //PU_mmHgAt0C: 1.3332200E+02, //Milimeter of mercury at 0C                  
				"PSI ",       //PU_psi: 6.8947570E+03,    //                                                           
				"bar",        //PU_bars: 1.0000000E+05,   //                                           
				"mbar",       //PU_milliBars: 1.0000000E+02, //                                        
				"g/Sqcm",     //PU_gramPerSqCm: 9.8066500E+01, //Gram per square centimetre            
				"kg/Sqcm ",   //PU_kiloGramPerSqCm: 9.8066500E+04, //Kilogram per square centimetre    
				"kPa",        //PU_kiloPascals: 1.0000000E+03,   //                                    
				"Torr",       //PU_torr: 1.3332200E+02, //                                             
				"atm",        //PU_atm: 1.0132500E+05, //Atmosphere                                    
				"InH2O 60F",  //PU_inH2OAt60F: 2.4884283E+02, //Inch of water at 60F                   
				"cmH2O 4C",   //PU_cmH2OAt4C: 9.8063749E+01, //Centimetre of water at 4C               
				"mH2O 4C",    //PU_mH2OAt4C: 9.8063749E+03, //Meter of water at 4C                     
				"cmHg 0C",    //PU_cmHGAt0C: 1.3332240E+03, //Centimetre of mercury at 0C              
				"lbs/ft^2",   //PU_psf: 4.7880260E+01, //Pounds per Square Foot Pressure               
				"hPascals",   //PU_hectoPascals: 1.0000000E+02, //                                     
				"kg/m^2",     //PU_kgsm: 9.8066500E+00, //Kiligram  per square meter                   
				"FtH2O 4C",   //PU_ftH2OAt4C: 2.9889831E+03,  //Foot of water at 4C                    
				"FtH2O 60F",  //PU_ftH2OAt60F: 2.9861139E+03, //Foot of water at 60F                   
				"mHg 0C",     //PU_mHGAt0C: 1.3332240E+05, //Meter of mercury at 0C                    
				"MPSI",       //PU_megaPascals: 1.0000000E+06, //                                      
				"InH2O 4C",   //PU_inH20At4C: 2.4908200E+02, //Inch of water at 4C                     
				"mmH2O 4C",   //PU_mmH20At4C: 9.8063800E+00, //Millimeter of water at 4C  
				"kg/cm^2",    //TESTING UNIT equal to Kg/Sqcm   
				"mmWc",       //Millimeters water column
			],
			"Type 2" : [
				"ft^3/min",    //pies cubicos por minuto
				"gal/min",     //galones por minuto
				"l/min",        //litros por minuto
				"IG/min",       //
				"m^3/hr",       // metros cubicos por hora
				"gal/s",        //galones por segundo 
				"Mgal/day",     //Megagalones por dia
				"l/s",          //Litros por segundo
				"Ml/day",       //Megalitros por dia
				"ft^3/s",        //Pies cubicos por segundo
				"ft^3/day",     //Pies cubicos por dia
				"m^3/s",        //Metros cubidos por segundo
				"m^3/day",      //Metros cubicos por dia
				"IG/hr",        //
				"IG/day",       //
				"n m^3/hr",     //Metros cubicos NORMALES por hora
				"n l/hr",       //litros cubicos NORMALES por hora
				"std ft^3/min", //pies cubidos estadar por minuto
				"ft^3/hr",      //Pies cubicos por hora
				"m^3/min",      //Metros cubicos por minuto
				"barrels/s",    //Barriles por segundo
				"barrels/min",  //Barriles por minuto
				"barrels/hr",   //Barriles por hora
				"barrels/day",  //Barriles por día
				"gal/hr",       //Galones por hora
				"IG/s",         //
				"l/hr",         //litros por hora
				"gal/day",      //galones por dia
			],
			"Type 3" : [
				"degC", //Grados centigrados
				"degF", //Grados faranheit
				"degR", //Grados Racon
				"degK", //Grados Kelvin
			],
			"Type 4" : [
				"in/sec", //pulgadas por segundo
				"mm/sec", //milimetros por segundo
			],
			"Type 5" : [
				"g's",     //??
				"m/sec^2", //metros por segundo cuadrado
			],
			"Type 6" : [
				"%"       //porcentaje
			],
			"HE-Flow" : [
				"ft^3/min",    //pies cubicos por minuto
				"gal/min",     //galones por minuto
				"l/min",        //litros por minuto
				"IG/min",       //
				"m^3/hr",       // metros cubicos por hora
				"gal/s",        //galones por segundo 
				"Mgal/day",     //Megagalones por dia
				"l/s",          //Litros por segundo
				"Ml/day",       //Megalitros por dia
				"ft^3/s",        //Pies cubicos por segundo
				"ft^3/day",     //Pies cubicos por dia
				"m^3/s",        //Metros cubidos por segundo
				"m^3/day",      //Metros cubicos por dia
				"IG/hr",        //
				"IG/day",       //
				"n m^3/hr",     //Metros cubicos NORMALES por hora
				"n l/hr",       //litros cubicos NORMALES por hora
				"std ft^3/min", //pies cubidos estadar por minuto
				"ft^3/hr",      //Pies cubicos por hora
				"m^3/min",      //Metros cubicos por minuto
				"barrels/s",    //Barriles por segundo
				"barrels/min",  //Barriles por minuto
				"barrels/hr",   //Barriles por hora
				"barrels/day",  //Barriles por día
				"gal/hr",       //Galones por hora
				"IG/s",         //
				"l/hr",         //litros por hora
				"gal/day",      //galones por dia
			],
			
		}
	};
};
module.exports = list();