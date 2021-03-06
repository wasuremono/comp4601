//
// Vivado(TM)
// rundef.js: a Vivado-generated Runs Script for WSH 5.1/5.6
// Copyright 1986-2014 Xilinx, Inc. All Rights Reserved.
//

var WshShell = new ActiveXObject( "WScript.Shell" );
var ProcEnv = WshShell.Environment( "Process" );
var PathVal = ProcEnv("PATH");
if ( PathVal.length == 0 ) {
  PathVal = "I:/Xilinx/SDK/2014.4/bin;I:/Xilinx/Vivado/2014.4/ids_lite/ISE/bin/nt64;I:/Xilinx/Vivado/2014.4/ids_lite/ISE/lib/nt64;I:/Xilinx/Vivado/2014.4/bin;";
} else {
  PathVal = "I:/Xilinx/SDK/2014.4/bin;I:/Xilinx/Vivado/2014.4/ids_lite/ISE/bin/nt64;I:/Xilinx/Vivado/2014.4/ids_lite/ISE/lib/nt64;I:/Xilinx/Vivado/2014.4/bin;" + PathVal;
}

ProcEnv("PATH") = PathVal;

var RDScrFP = WScript.ScriptFullName;
var RDScrN = WScript.ScriptName;
var RDScrDir = RDScrFP.substr( 0, RDScrFP.length - RDScrN.length - 1 );
var ISEJScriptLib = RDScrDir + "/ISEWrap.js";
eval( EAInclude(ISEJScriptLib) );


ISEStep( "vivado",
         "-log bus_interface_v1_0.vds -m64 -mode batch -messageDb vivado.pb -source bus_interface_v1_0.tcl" );



function EAInclude( EAInclFilename ) {
  var EAFso = new ActiveXObject( "Scripting.FileSystemObject" );
  var EAInclFile = EAFso.OpenTextFile( EAInclFilename );
  var EAIFContents = EAInclFile.ReadAll();
  EAInclFile.Close();
  return EAIFContents;
}
