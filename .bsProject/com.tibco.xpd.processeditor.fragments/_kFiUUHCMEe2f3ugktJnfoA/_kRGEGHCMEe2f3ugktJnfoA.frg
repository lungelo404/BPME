<?xml version="1.0" encoding="UTF-8"?>
<xpdl2:Package xmlns:database="http://www.tibco.com/XPD/database1.0.0" xmlns:eaijava="http://www.tibco.com/XPD/EAIJava1.0.0" xmlns:email="http://www.tibco.com/XPD/email1.0.0" xmlns:iProcessExt="http://www.tibco.com/XPD/iProcessExt1.0.0" xmlns:simulation="http://www.tibco.com/xpd/Simulation1.0.1" xmlns:xpdExt="http://www.tibco.com/XPD/xpdExtension1.0.0" xmlns:xpdl2="http://www.wfmc.org/2008/XPDL2.1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Id="_c0zzUIDiEd28P6TQ-F95eg" xpdExt:DisplayName="ProcessPackage" Name="ProcessPackage">
  <xpdl2:PackageHeader xpdExt:Language="en_GB">
    <xpdl2:XPDLVersion>2.1</xpdl2:XPDLVersion>
    <xpdl2:Vendor>TIBCO</xpdl2:Vendor>
    <xpdl2:Created>2008-09-12T17:49:57BST</xpdl2:Created>
    <xpdl2:Description></xpdl2:Description>
    <xpdl2:Documentation></xpdl2:Documentation>
    <xpdl2:CostUnit>GBP</xpdl2:CostUnit>
  </xpdl2:PackageHeader>
  <xpdl2:RedefinableHeader PublicationStatus="UNDER_REVISION">
    <xpdl2:Author>rsomayaj</xpdl2:Author>
  </xpdl2:RedefinableHeader>
  <xpdl2:Pools>
    <xpdl2:Pool Id="_Fragment_Dummy_Pool__dzGnkIDiEd28P6TQ-F95eg" xpdExt:DisplayName="Pool" Name="Pool" BoundaryVisible="true" Process="_c0zzUYDiEd28P6TQ-F95eg">
      <xpdl2:Lanes>
        <xpdl2:Lane Id="_Fragment_Dummy_Lane__dzGnkYDiEd28P6TQ-F95eg" xpdExt:DisplayName="Lane" Name="Lane">
          <xpdl2:NodeGraphicsInfos>
            <xpdl2:NodeGraphicsInfo Height="300.0"/>
          </xpdl2:NodeGraphicsInfos>
        </xpdl2:Lane>
      </xpdl2:Lanes>
    </xpdl2:Pool>
  </xpdl2:Pools>
  <xpdl2:Associations>
    <xpdl2:Association Id="_dzGnl4DiEd28P6TQ-F95eg" xpdExt:DisplayName="" Name="" AssociationDirection="None" Source="_dzGnmYDiEd28P6TQ-F95eg" Target="_dzGnloDiEd28P6TQ-F95eg">
      <xpdl2:Object Id="_dzGnmIDiEd28P6TQ-F95eg"/>
      <xpdl2:ConnectorGraphicsInfos>
        <xpdl2:ConnectorGraphicsInfo BorderColor="0,0,128" ToolId="XPD.ConnectionInfo"/>
      </xpdl2:ConnectorGraphicsInfos>
    </xpdl2:Association>
  </xpdl2:Associations>
  <xpdl2:Artifacts>
    <xpdl2:Artifact Id="_dzGnmYDiEd28P6TQ-F95eg" ArtifactType="Annotation" TextAnnotation="Text Annotation">
      <xpdl2:NodeGraphicsInfos>
        <xpdl2:NodeGraphicsInfo BorderColor="0,0,128" Height="17.0" LaneId="_Fragment_Dummy_Lane__dzGnkYDiEd28P6TQ-F95eg" Width="83.0">
          <xpdl2:Coordinates XCoordinate="40.0" YCoordinate="108.0"/>
        </xpdl2:NodeGraphicsInfo>
      </xpdl2:NodeGraphicsInfos>
    </xpdl2:Artifact>
  </xpdl2:Artifacts>
  <xpdl2:WorkflowProcesses>
    <xpdl2:WorkflowProcess Id="_c0zzUYDiEd28P6TQ-F95eg" xpdExt:FlowRoutingStyle="UncenteredOnTasks" xpdExt:DisplayName="ProcessPackage-Process" Name="ProcessPackageProcess">
      <xpdl2:ProcessHeader>
        <xpdl2:Description></xpdl2:Description>
      </xpdl2:ProcessHeader>
      <xpdl2:Activities>
        <xpdl2:Activity Id="_dzGnloDiEd28P6TQ-F95eg" Name="Task" xpdExt:DisplayName="Task">
          <xpdl2:Implementation>
            <xpdl2:No/>
          </xpdl2:Implementation>
          <xpdl2:NodeGraphicsInfos>
            <xpdl2:NodeGraphicsInfo BorderColor="0,0,128" FillColor="255,219,74" Height="64.0" LaneId="_Fragment_Dummy_Lane__dzGnkYDiEd28P6TQ-F95eg" Width="96.0">
              <xpdl2:Coordinates XCoordinate="125.0" YCoordinate="186.0"/>
            </xpdl2:NodeGraphicsInfo>
          </xpdl2:NodeGraphicsInfos>
        </xpdl2:Activity>
      </xpdl2:Activities>
      <xpdl2:ExtendedAttributes>
        <xpdl2:ExtendedAttribute Name="FragmentFeedbackRect_1" Value="0,0,83,17"/>
        <xpdl2:ExtendedAttribute Name="FragmentFeedbackRect_2" Value="37,54,96,64"/>
        <xpdl2:ExtendedAttribute Name="Destination" Value="CE"/>
      </xpdl2:ExtendedAttributes>
    </xpdl2:WorkflowProcess>
  </xpdl2:WorkflowProcesses>
  <xpdl2:ExtendedAttributes>
    <xpdl2:ExtendedAttribute Name="CreatedBy" Value="TIBCO Business Studio"/>
    <xpdl2:ExtendedAttribute Name="FormatVersion" Value="1000"/>
    <xpdl2:ExtendedAttribute Name="OriginalFormatVersion" Value="13"/>
  </xpdl2:ExtendedAttributes>
</xpdl2:Package>