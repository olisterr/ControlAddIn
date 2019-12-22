page 50101 "Tic-Tac-Toe"
{
    PageType = Card;
    ApplicationArea = All;
    UsageCategory = Administration;
    Caption = 'Tic-Tac-Toe';

    layout
    {
        area(Content)
        {
            usercontrol("Tic-Tac-Toe"; "Tic-Tac-Toe")
            {
                ApplicationArea = All;
            }

        }
    }
    actions
    {
        area(Processing)
        {
            action(Refresh)
            {
                ApplicationArea = All;
                Image = Refresh;
                Promoted = true;
                PromotedIsBig = true;
                PromotedCategory = New;
                trigger OnAction()
                var
                    Page_int: Text;
                    Rec_Objects: Record AllObjWithCaption;
                begin
                    //CurrPage.DemoControlAddIn.init();
                    Hyperlink(GetUrl(ClientType::Web, CompanyName, ObjectType::Page, 50101));
                end;
            }

        }
    }






}