return {
    LineAndCharacter: TypeScript.LineAndCharacter,
    LineMap: TypeScript.LineMap,
    SyntaxKind: TypeScript.SyntaxKind,
    SyntaxNode: TypeScript.SyntaxNode,
    SourceUnitSyntax: TypeScript.SourceUnitSyntax,
    ExternalModuleReferenceSyntax: TypeScript.ExternalModuleReferenceSyntax,
    ModuleNameModuleReferenceSyntax: TypeScript.ModuleNameModuleReferenceSyntax,
    ImportDeclarationSyntax: TypeScript.ImportDeclarationSyntax,
    ExportAssignmentSyntax: TypeScript.ExportAssignmentSyntax,
    ClassDeclarationSyntax: TypeScript.ClassDeclarationSyntax,
    InterfaceDeclarationSyntax: TypeScript.InterfaceDeclarationSyntax,
    HeritageClauseSyntax: TypeScript.HeritageClauseSyntax,
    ModuleDeclarationSyntax: TypeScript.ModuleDeclarationSyntax,
    FunctionDeclarationSyntax: TypeScript.FunctionDeclarationSyntax,
    VariableStatementSyntax: TypeScript.VariableStatementSyntax,
    VariableDeclarationSyntax: TypeScript.VariableDeclarationSyntax,
    VariableDeclaratorSyntax: TypeScript.VariableDeclaratorSyntax,
    EqualsValueClauseSyntax: TypeScript.EqualsValueClauseSyntax,
    PrefixUnaryExpressionSyntax: TypeScript.PrefixUnaryExpressionSyntax,
    ArrayLiteralExpressionSyntax: TypeScript.ArrayLiteralExpressionSyntax,
    OmittedExpressionSyntax: TypeScript.OmittedExpressionSyntax,
    ParenthesizedExpressionSyntax: TypeScript.ParenthesizedExpressionSyntax,
    SimpleArrowFunctionExpressionSyntax: TypeScript.SimpleArrowFunctionExpressionSyntax,
    ParenthesizedArrowFunctionExpressionSyntax: TypeScript.ParenthesizedArrowFunctionExpressionSyntax,
    QualifiedNameSyntax: TypeScript.QualifiedNameSyntax,
    TypeArgumentListSyntax: TypeScript.TypeArgumentListSyntax,
    ConstructorTypeSyntax: TypeScript.ConstructorTypeSyntax,
    FunctionTypeSyntax: TypeScript.FunctionTypeSyntax,
    ObjectTypeSyntax: TypeScript.ObjectTypeSyntax,
    ArrayTypeSyntax: TypeScript.ArrayTypeSyntax,
    GenericTypeSyntax: TypeScript.GenericTypeSyntax,
    TypeQuerySyntax: TypeScript.TypeQuerySyntax,
    TypeAnnotationSyntax: TypeScript.TypeAnnotationSyntax,
    BlockSyntax: TypeScript.BlockSyntax,
    ParameterSyntax: TypeScript.ParameterSyntax,
    MemberAccessExpressionSyntax: TypeScript.MemberAccessExpressionSyntax,
    PostfixUnaryExpressionSyntax: TypeScript.PostfixUnaryExpressionSyntax,
    ElementAccessExpressionSyntax: TypeScript.ElementAccessExpressionSyntax,
    InvocationExpressionSyntax: TypeScript.InvocationExpressionSyntax,
    ArgumentListSyntax: TypeScript.ArgumentListSyntax,
    BinaryExpressionSyntax: TypeScript.BinaryExpressionSyntax,
    ConditionalExpressionSyntax: TypeScript.ConditionalExpressionSyntax,
    ConstructSignatureSyntax: TypeScript.ConstructSignatureSyntax,
    MethodSignatureSyntax: TypeScript.MethodSignatureSyntax,
    IndexSignatureSyntax: TypeScript.IndexSignatureSyntax,
    PropertySignatureSyntax: TypeScript.PropertySignatureSyntax,
    CallSignatureSyntax: TypeScript.CallSignatureSyntax,
    ParameterListSyntax: TypeScript.ParameterListSyntax,
    TypeParameterListSyntax: TypeScript.TypeParameterListSyntax,
    TypeParameterSyntax: TypeScript.TypeParameterSyntax,
    ConstraintSyntax: TypeScript.ConstraintSyntax,
    ElseClauseSyntax: TypeScript.ElseClauseSyntax,
    IfStatementSyntax: TypeScript.IfStatementSyntax,
    ExpressionStatementSyntax: TypeScript.ExpressionStatementSyntax,
    ConstructorDeclarationSyntax: TypeScript.ConstructorDeclarationSyntax,
    MemberFunctionDeclarationSyntax: TypeScript.MemberFunctionDeclarationSyntax,
    GetAccessorSyntax: TypeScript.GetAccessorSyntax,
    SetAccessorSyntax: TypeScript.SetAccessorSyntax,
    MemberVariableDeclarationSyntax: TypeScript.MemberVariableDeclarationSyntax,
    IndexMemberDeclarationSyntax: TypeScript.IndexMemberDeclarationSyntax,
    ThrowStatementSyntax: TypeScript.ThrowStatementSyntax,
    ReturnStatementSyntax: TypeScript.ReturnStatementSyntax,
    ObjectCreationExpressionSyntax: TypeScript.ObjectCreationExpressionSyntax,
    SwitchStatementSyntax: TypeScript.SwitchStatementSyntax,
    CaseSwitchClauseSyntax: TypeScript.CaseSwitchClauseSyntax,
    DefaultSwitchClauseSyntax: TypeScript.DefaultSwitchClauseSyntax,
    BreakStatementSyntax: TypeScript.BreakStatementSyntax,
    ContinueStatementSyntax: TypeScript.ContinueStatementSyntax,
    ForStatementSyntax: TypeScript.ForStatementSyntax,
    ForInStatementSyntax: TypeScript.ForInStatementSyntax,
    WhileStatementSyntax: TypeScript.WhileStatementSyntax,
    WithStatementSyntax: TypeScript.WithStatementSyntax,
    EnumDeclarationSyntax: TypeScript.EnumDeclarationSyntax,
    EnumElementSyntax: TypeScript.EnumElementSyntax,
    CastExpressionSyntax: TypeScript.CastExpressionSyntax,
    ObjectLiteralExpressionSyntax: TypeScript.ObjectLiteralExpressionSyntax,
    SimplePropertyAssignmentSyntax: TypeScript.SimplePropertyAssignmentSyntax,
    FunctionPropertyAssignmentSyntax: TypeScript.FunctionPropertyAssignmentSyntax,
    FunctionExpressionSyntax: TypeScript.FunctionExpressionSyntax,
    EmptyStatementSyntax: TypeScript.EmptyStatementSyntax,
    TryStatementSyntax: TypeScript.TryStatementSyntax,
    CatchClauseSyntax: TypeScript.CatchClauseSyntax,
    FinallyClauseSyntax: TypeScript.FinallyClauseSyntax,
    LabeledStatementSyntax: TypeScript.LabeledStatementSyntax,
    DoStatementSyntax: TypeScript.DoStatementSyntax,
    TypeOfExpressionSyntax: TypeScript.TypeOfExpressionSyntax,
    DeleteExpressionSyntax: TypeScript.DeleteExpressionSyntax,
    VoidExpressionSyntax: TypeScript.VoidExpressionSyntax,
    DebuggerStatementSyntax: TypeScript.DebuggerStatementSyntax,
    LanguageVersion: TypeScript.LanguageVersion,
    ParseOptions: TypeScript.ParseOptions,
    SyntaxTree: TypeScript.SyntaxTree,
    Parser: {
        parse: function (filename, source, isdts) {
            // Thanks: http://stackoverflow.com/questions/20187928/typescript-get-syntax-tree
            var allowASI = true;
            return TypeScript.Parser.parse(filename,
                TypeScript.SimpleText.fromString(source),
                isdts,
                new TypeScript.ParseOptions(TypeScript.LanguageVersion.EcmaScript5, allowASI));
        }
    }
};
})();
""";
