USE [TrainingAssignment]
GO
/****** Object:  Table [SatheshRangasamy].[SubmissionMetaData]    Script Date: 10/9/2018 9:50:41 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [SatheshRangasamy].[SubmissionMetaData](
	[PlayerID] [int] NOT NULL,
	[CreatedDateTime] [datetime] NOT NULL,
	[SubmittedDateTime] [datetime] NOT NULL,
	[LastUpdatedDateTime] [datetime] NOT NULL,
	[SubmittedBy] [varchar](100) NOT NULL,
	[UpdatedBy] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[PlayerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [SatheshRangasamy].[SubmissionMetaData] ADD  DEFAULT (getdate()) FOR [CreatedDateTime]
GO
ALTER TABLE [SatheshRangasamy].[SubmissionMetaData] ADD  DEFAULT (getdate()) FOR [SubmittedDateTime]
GO
ALTER TABLE [SatheshRangasamy].[SubmissionMetaData] ADD  DEFAULT (getdate()) FOR [LastUpdatedDateTime]
GO
