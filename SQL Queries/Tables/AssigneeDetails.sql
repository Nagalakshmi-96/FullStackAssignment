USE [TrainingAssignment]
GO
/****** Object:  Table [SatheshRangasamy].[AssigneeDetails]    Script Date: 10/9/2018 9:45:28 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SatheshRangasamy].[AssigneeDetails](
	[PlayerID] [int] NOT NULL,
	[AssigneeShort] [varchar](100) NOT NULL,
	[Assignee] [varchar](100) NOT NULL,
	[Color] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[PlayerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [SatheshRangasamy].[AssigneeDetails]  WITH CHECK ADD  CONSTRAINT [FK_AssigneeDetails] FOREIGN KEY([PlayerID])
REFERENCES [SatheshRangasamy].[PersonalDetails] ([PlayerID])
GO
ALTER TABLE [SatheshRangasamy].[AssigneeDetails] CHECK CONSTRAINT [FK_AssigneeDetails]
GO
