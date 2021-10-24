USE [TrainingAssignment]
GO
/****** Object:  StoredProcedure [SatheshRangasamy].[USP_authorizeUser]    Script Date: 10/9/2018 9:51:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Sathesh Rangasamy
-- Create date: October 4, 2018
-- Description:	Procedure to Check whether the logged user is a authorized user or not
-- =============================================
CREATE PROCEDURE [SatheshRangasamy].[USP_authorizeUser]
	
	@userName VARCHAR(100)
	
AS
BEGIN
	
	

	SELECT * FROM [SatheshRangasamy].[AuthorizedUsers]
	WHERE [UserName]=@userName

    
END

GO
