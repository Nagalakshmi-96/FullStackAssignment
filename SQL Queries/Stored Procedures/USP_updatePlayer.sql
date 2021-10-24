USE [TrainingAssignment]
GO
/****** Object:  StoredProcedure [SatheshRangasamy].[USP_updatePlayer]    Script Date: 10/9/2018 9:53:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [SatheshRangasamy].[USP_updatePlayer]
@id INT,
@firstName varchar(100),
@lastName varchar(100),
@preferredName varchar(100),
@gender varchar(100),
@dateOfBirth varchar(100),
@countryOfBirth varchar(100),
@townOfBirth varchar(100),
@nationalities varchar(100),
@nationalInsuranceNumber varchar(100)	,
@assignee varchar(100),
@assigneeShort varchar(100),
@color varchar(100),
@updatedBy varchar(100)
AS
BEGIN
	SET NOCOUNT ON;

   UPDATE [SatheshRangasamy].[PersonalDetails]
	   SET [FirstName] =@firstName
		  ,[LastName] = @lastName
		  ,[PreferredName] = @preferredName
		  ,[Gender] =@gender
		  ,[DateofBirth] = @dateOfBirth
		  ,[CountryofBirth] = @countryOfBirth
		  ,[TownofBirth] = @townOfBirth
		  ,[Nationalities] = @nationalities
		  ,[NationalInsuranceNumber] = @nationalInsuranceNumber
	 WHERE [playerID]=@id
	
	
UPDATE [SatheshRangasamy].[AssigneeDetails]
   SET 
      [AssigneeShort] =@assigneeShort
      ,[Assignee] = @assignee
      ,[Color] = @color
 WHERE [playerID]=@id

UPDATE [SatheshRangasamy].[SubmissionMetaData]
SET

[LastUpdatedDateTime]=GETDATE(),

[UpdatedBy]=@updatedBy
WHERE [playerID]=@id           
           



END

GO
