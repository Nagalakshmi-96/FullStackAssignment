USE [TrainingAssignment]
GO
/****** Object:  StoredProcedure [SatheshRangasamy].[USP_getUserList]    Script Date: 10/9/2018 9:53:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [SatheshRangasamy].[USP_getUserList]
	@id INT 
AS
BEGIN
	SET NOCOUNT ON;

	IF @id IS NULL
	  BEGIN
		SELECT * FROM [SatheshRangasamy].[PersonalDetails] T1
		 INNER JOIN [SatheshRangasamy].[RegistrationDetails] T2 
			ON T1.[PlayerID] = T2.[PlayerID] 
		INNER JOIN [SatheshRangasamy].[SectionDetails] T3
			ON T1.[PlayerID] = T3.[PlayerID] 
		INNER JOIN [SatheshRangasamy].[SubmissionMetaData] T4
			ON T1.[PlayerID] = T4.[PlayerID] 
		INNER JOIN [SatheshRangasamy].[AssigneeDetails] T5
			ON T1.[PlayerID] = T5.[PlayerID] 
		WHERE
			T1.[isDeleted]=0
	  END
	ELSE
	  BEGIN
		SELECT * FROM [SatheshRangasamy].[PersonalDetails] T1
		 INNER JOIN [SatheshRangasamy].[RegistrationDetails] T2 
			ON T1.[PlayerID] = T2.[PlayerID] 
		INNER JOIN [SatheshRangasamy].[SectionDetails] T3
			ON T1.[PlayerID] = T3.[PlayerID] 
		INNER JOIN [SatheshRangasamy].[SubmissionMetaData] T4
			ON T1.[PlayerID] = T4.[PlayerID] 
		INNER JOIN [SatheshRangasamy].[AssigneeDetails] T5
			ON T1.[PlayerID] = T5.[PlayerID] 
		WHERE
			T1.[PlayerID]=@id AND T1.[isDeleted]=0
	  END

END


GO
