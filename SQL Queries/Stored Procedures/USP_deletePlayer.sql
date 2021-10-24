USE [TrainingAssignment]
GO
/****** Object:  StoredProcedure [SatheshRangasamy].[USP_deletePlayer]    Script Date: 10/9/2018 9:52:40 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Sathesh Rangasamy
-- Create date: October 3, 2018
-- Description:	Procedure to delete Players
-- =============================================
CREATE PROCEDURE [SatheshRangasamy].[USP_deletePlayer]
	@id INT
AS
BEGIN
	SET NOCOUNT ON;
	UPDATE [SatheshRangasamy].[PersonalDetails]
	SET [isDeleted]=1
	WHERE [PlayerID]=@id

END


GO
