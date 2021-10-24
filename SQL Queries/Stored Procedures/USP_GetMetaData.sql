USE [TrainingAssignment]
GO
/****** Object:  StoredProcedure [SatheshRangasamy].[USP_GetMetaData]    Script Date: 10/9/2018 9:52:54 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Sathesh Rangasamy
-- Create date: October 3, 2018
-- Description:	Procedure to get All metadata for the project
-- =============================================
CREATE PROCEDURE [SatheshRangasamy].[USP_GetMetaData]
AS
BEGIN
	SET NOCOUNT ON;

    
	SELECT * FROM [SatheshRangasamy].[Assignees]

	SELECT * FROM [SatheshRangasamy].[status_Input_Meta]

	SELECT * FROM [SatheshRangasamy].[registration_type_Input_Meta]
	
	SELECT * FROM [SatheshRangasamy].[registering_club_Input_Meta]

	SELECT * FROM [SatheshRangasamy].[section_status_Input_Meta]

	SELECT * FROM [SatheshRangasamy].[Status_List_Meta]

END

GO
