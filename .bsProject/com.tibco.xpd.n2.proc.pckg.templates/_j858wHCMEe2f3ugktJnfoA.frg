<?xml version="1.0" encoding="UTF-8"?>
<xpdl2:Package xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:database="http://www.tibco.com/XPD/database1.0.0" xmlns:eaijava="http://www.tibco.com/XPD/EAIJava1.0.0" xmlns:email="http://www.tibco.com/XPD/email1.0.0" xmlns:iProcessExt="http://www.tibco.com/XPD/iProcessExt1.0.0" xmlns:orchestrator="http://www.tibco.com/XPD/orchestrator1.0.0" xmlns:order="http://www.tibco.com/XPD/order1.0.0" xmlns:simulation="http://www.tibco.com/xpd/Simulation1.0.1" xmlns:xpdExt="http://www.tibco.com/XPD/xpdExtension1.0.0" xmlns:xpdl2="http://www.wfmc.org/2008/XPDL2.1" xsi:schemaLocation="http://www.wfmc.org/2008/XPDL2.1 http://www.wfmc.org/standards/bpmnxpdl_31.xsd" Id="_TcZicOduEd-0ceiqUezQHg" xpdExt:DisplayName="Business Service Template" Name="ProcessPackage">
  <xpdl2:PackageHeader xpdExt:Language="en_GB">
    <xpdl2:XPDLVersion>2.1</xpdl2:XPDLVersion>
    <xpdl2:Vendor>TIBCO</xpdl2:Vendor>
    <xpdl2:Created>2010-11-03</xpdl2:Created>
    <xpdl2:Description></xpdl2:Description>
    <xpdl2:Documentation></xpdl2:Documentation>
    <xpdl2:CostUnit>GBP</xpdl2:CostUnit>
  </xpdl2:PackageHeader>
  <xpdl2:RedefinableHeader PublicationStatus="UNDER_REVISION">
    <xpdl2:Author>bharge</xpdl2:Author>
  </xpdl2:RedefinableHeader>
  <xpdl2:Pools>
    <xpdl2:Pool Id="_TcZicuduEd-0ceiqUezQHg" xpdExt:DisplayName="Pool" Name="Pool" BoundaryVisible="true" Process="_TcZie-duEd-0ceiqUezQHg">
      <xpdl2:Lanes>
        <xpdl2:Lane Id="_TcZic-duEd-0ceiqUezQHg" xpdExt:DisplayName="Lane" Name="Lane">
          <xpdl2:NodeGraphicsInfos>
            <xpdl2:NodeGraphicsInfo Height="300.0"/>
          </xpdl2:NodeGraphicsInfos>
        </xpdl2:Lane>
      </xpdl2:Lanes>
    </xpdl2:Pool>
    <xpdl2:Pool Id="_TcZidOduEd-0ceiqUezQHg" xpdExt:DisplayName="Pool" Name="Pool" BoundaryVisible="true" Process="_TcZiduduEd-0ceiqUezQHg">
      <xpdl2:Lanes>
        <xpdl2:Lane Id="_TcZideduEd-0ceiqUezQHg" xpdExt:DisplayName="Lane" Name="Lane">
          <xpdl2:NodeGraphicsInfos>
            <xpdl2:NodeGraphicsInfo Height="314.0"/>
          </xpdl2:NodeGraphicsInfos>
        </xpdl2:Lane>
      </xpdl2:Lanes>
      <xpdl2:NodeGraphicsInfos>
        <xpdl2:NodeGraphicsInfo BorderColor="0,0,128" FillColor="223,179,0" IsVisible="true"/>
      </xpdl2:NodeGraphicsInfos>
    </xpdl2:Pool>
  </xpdl2:Pools>
  <xpdl2:WorkflowProcesses>
    <xpdl2:WorkflowProcess Id="_TcZiduduEd-0ceiqUezQHg" xpdExt:FlowRoutingStyle="UncenteredOnTasks" xpdExt:ApiEndPointParticipant="_TcZiceduEd-0ceiqUezQHg" xpdExt:DisplayName="Business Process" Name="ProcessPackageProcess">
      <xpdl2:ProcessHeader>
        <xpdl2:Description></xpdl2:Description>
      </xpdl2:ProcessHeader>
      <xpdl2:Activities>
        <xpdl2:Activity Id="_TcZid-duEd-0ceiqUezQHg" Name="StartEvent" xpdExt:DisplayName="Start Event">
          <xpdl2:Event>
            <xpdl2:StartEvent Trigger="None"/>
          </xpdl2:Event>
          <xpdl2:NodeGraphicsInfos>
            <xpdl2:NodeGraphicsInfo BorderColor="0,0,128" FillColor="255,219,74" Height="27.0" LaneId="_TcZideduEd-0ceiqUezQHg" Width="27.0">
              <xpdl2:Coordinates XCoordinate="55.0" YCoordinate="155.0"/>
            </xpdl2:NodeGraphicsInfo>
          </xpdl2:NodeGraphicsInfos>
          <xpdl2:Extensions/>
        </xpdl2:Activity>
        <xpdl2:Activity Id="_TcZieeduEd-0ceiqUezQHg" Name="EndEvent" xpdExt:DisplayName="End Event">
          <xpdl2:Event>
            <xpdl2:EndEvent Result="None"/>
          </xpdl2:Event>
          <xpdl2:NodeGraphicsInfos>
            <xpdl2:NodeGraphicsInfo BorderColor="0,0,128" FillColor="255,219,74" Height="30.0" LaneId="_TcZideduEd-0ceiqUezQHg" Width="30.0">
              <xpdl2:Coordinates XCoordinate="592.0" YCoordinate="155.0"/>
            </xpdl2:NodeGraphicsInfo>
          </xpdl2:NodeGraphicsInfos>
        </xpdl2:Activity>
      </xpdl2:Activities>
      <xpdl2:Transitions>
        <xpdl2:Transition Id="_TcZieuduEd-0ceiqUezQHg" xpdExt:DisplayName="" Name="" From="_TcZid-duEd-0ceiqUezQHg" To="_TcZieeduEd-0ceiqUezQHg">
          <xpdl2:ConnectorGraphicsInfos>
            <xpdl2:ConnectorGraphicsInfo BorderColor="0,0,128" ToolId="XPD.ConnectionInfo"/>
          </xpdl2:ConnectorGraphicsInfos>
        </xpdl2:Transition>
      </xpdl2:Transitions>
      <xpdl2:ExtendedAttributes>
        <xpdl2:ExtendedAttribute Name="Destination" Value="CE"/>
      </xpdl2:ExtendedAttributes>
      <xpdl2:Extensions/>
    </xpdl2:WorkflowProcess>
    <xpdl2:WorkflowProcess Id="_TcZie-duEd-0ceiqUezQHg" xpdExt:FlowRoutingStyle="UncenteredOnTasks" xpdExt:XpdModelType="PageFlow" xpdExt:BusinessServiceCategory="MyProject/ProcessPackage" xpdExt:PublishAsBusinessService="true" xpdExt:DisplayName="Business Service" Name="ProcessPackageStartEvent">
      <xpdl2:ProcessHeader/>
      <xpdl2:Activities>
        <xpdl2:Activity Id="_TcZifOduEd-0ceiqUezQHg" Name="Start" xpdExt:Visibility="Private" xpdExt:DisplayName="Start">
          <xpdl2:Event>
            <xpdl2:StartEvent Trigger="None"/>
          </xpdl2:Event>
          <xpdl2:NodeGraphicsInfos>
            <xpdl2:NodeGraphicsInfo BorderColor="0,0,128" FillColor="205,158,233" Height="27.0" LaneId="_TcZic-duEd-0ceiqUezQHg" Width="27.0">
              <xpdl2:Coordinates XCoordinate="33.0" YCoordinate="72.0"/>
            </xpdl2:NodeGraphicsInfo>
          </xpdl2:NodeGraphicsInfos>
        </xpdl2:Activity>
        <xpdl2:Activity Id="_TcZifeduEd-0ceiqUezQHg" Name="UserTask" xpdExt:Visibility="Private" xpdExt:DisplayName="User Task">
          <xpdl2:Implementation>
            <xpdl2:Task>
              <xpdl2:TaskUser Implementation="Unspecified">
                <xpdl2:Performers>
                  <xpdl2:Performer>-defined-in-Activity-Performer-</xpdl2:Performer>
                </xpdl2:Performers>
                <xpdl2:MessageIn Id="_TcZifuduEd-0ceiqUezQHg" xpdExt:DisplayName=""/>
                <xpdl2:MessageOut Id="_TcZif-duEd-0ceiqUezQHg" xpdExt:DisplayName=""/>
              </xpdl2:TaskUser>
            </xpdl2:Task>
          </xpdl2:Implementation>
          <xpdl2:NodeGraphicsInfos>
            <xpdl2:NodeGraphicsInfo BorderColor="0,0,128" FillColor="205,158,233" Height="64.0" LaneId="_TcZic-duEd-0ceiqUezQHg" Width="96.0">
              <xpdl2:Coordinates XCoordinate="240.0" YCoordinate="72.0"/>
            </xpdl2:NodeGraphicsInfo>
          </xpdl2:NodeGraphicsInfos>
          <xpdl2:Extensions/>
          <xpdExt:ActivityResourcePatterns>
            <xpdExt:AllocationStrategy xpdExt:Offer="OfferAll" xpdExt:Strategy="SYSTEM_DETERMINED" xpdExt:ReOfferOnClose="false" xpdExt:ReOfferOnCancel="true"/>
          </xpdExt:ActivityResourcePatterns>
        </xpdl2:Activity>
        <xpdl2:Activity Id="_TcZigOduEd-0ceiqUezQHg" Name="Invokebusinessprocess" FinishMode="Automatic" StartMode="Automatic" xpdExt:Visibility="Private" xpdExt:DisplayName="Invoke business process">
          <xpdl2:Implementation>
            <xpdl2:SubFlow Execution="ASYNCHR" Id="_TcZiduduEd-0ceiqUezQHg" xpdExt:AsyncExecutionMode="Detached" xpdExt:StartStrategy="ScheduleStart" xpdExt:SuspendResumeWithParent="false"/>
          </xpdl2:Implementation>
          <xpdl2:Priority></xpdl2:Priority>
          <xpdl2:NodeGraphicsInfos>
            <xpdl2:NodeGraphicsInfo BorderColor="0,0,128" FillColor="205,158,233" Height="76.0" LaneId="_TcZic-duEd-0ceiqUezQHg" Width="106.0">
              <xpdl2:Coordinates XCoordinate="454.0" YCoordinate="73.0"/>
            </xpdl2:NodeGraphicsInfo>
          </xpdl2:NodeGraphicsInfos>
          <xpdl2:Extensions/>
        </xpdl2:Activity>
      </xpdl2:Activities>
      <xpdl2:Transitions>
        <xpdl2:Transition Id="_TcZiguduEd-0ceiqUezQHg" xpdExt:DisplayName="" Name="" From="_TcZifOduEd-0ceiqUezQHg" To="_TcZifeduEd-0ceiqUezQHg">
          <xpdl2:ConnectorGraphicsInfos>
            <xpdl2:ConnectorGraphicsInfo BorderColor="0,0,128" ToolId="XPD.ConnectionInfo"/>
          </xpdl2:ConnectorGraphicsInfos>
        </xpdl2:Transition>
        <xpdl2:Transition Id="_TcZig-duEd-0ceiqUezQHg" xpdExt:DisplayName="" Name="" From="_TcZifeduEd-0ceiqUezQHg" To="_TcZigOduEd-0ceiqUezQHg">
          <xpdl2:ConnectorGraphicsInfos>
            <xpdl2:ConnectorGraphicsInfo BorderColor="0,0,128" ToolId="XPD.ConnectionInfo"/>
            <xpdl2:ConnectorGraphicsInfo ToolId="XPD.StartAnchorPosition">
              <xpdl2:Coordinates XCoordinate="10.0" YCoordinate="0.0"/>
            </xpdl2:ConnectorGraphicsInfo>
          </xpdl2:ConnectorGraphicsInfos>
        </xpdl2:Transition>
      </xpdl2:Transitions>
      <xpdl2:ExtendedAttributes>
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