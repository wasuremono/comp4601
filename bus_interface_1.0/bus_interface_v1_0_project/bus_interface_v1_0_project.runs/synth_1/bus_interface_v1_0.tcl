# 
# Synthesis run script generated by Vivado
# 

set_param gui.test TreeTableDev
debug::add_scope template.lib 1
set_msg_config -id {HDL 9-1061} -limit 100000
set_msg_config -id {HDL 9-1654} -limit 100000
set_msg_config -id {Synth 8-256} -limit 10000
set_msg_config -id {Synth 8-638} -limit 10000

create_project -in_memory -part xc7z020clg484-1
set_param project.compositeFile.enableAutoGeneration 0
set_param synth.vivado.isSynthRun true
set_property webtalk.parent_dir i:/labs/ip_repo/bus_interface_1.0/bus_interface_v1_0_project/bus_interface_v1_0_project.cache/wt [current_project]
set_property parent.project_path i:/labs/ip_repo/bus_interface_1.0/bus_interface_v1_0_project/bus_interface_v1_0_project.xpr [current_project]
set_property default_lib xil_defaultlib [current_project]
set_property target_language Verilog [current_project]
set_property ip_repo_paths I:/Labs/ip_repo/bus_interface_1.0 [current_project]
read_vhdl -library xil_defaultlib {
  i:/labs/ip_repo/bus_interface_1.0/hdl/bus_interface_v1_0_S00_AXI.vhd
  i:/labs/ip_repo/bus_interface_1.0/hdl/bus_interface_v1_0.vhd
}
catch { write_hwdef -file bus_interface_v1_0.hwdef }
synth_design -top bus_interface_v1_0 -part xc7z020clg484-1
write_checkpoint -noxdef bus_interface_v1_0.dcp
catch { report_utilization -file bus_interface_v1_0_utilization_synth.rpt -pb bus_interface_v1_0_utilization_synth.pb }
