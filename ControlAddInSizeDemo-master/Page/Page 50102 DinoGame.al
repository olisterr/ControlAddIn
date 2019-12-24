page 50102 DinoGame
{
    PageType = Card;
    ApplicationArea = All;
    UsageCategory = Lists;
    // SourceTable = TableName;
    Caption = 'Dino Game';

    layout
    {
        area(Content)
        {
            usercontrol("Dino Game"; DinoGame)
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
                    Hyperlink(GetUrl(ClientType::Web, CompanyName, ObjectType::Page, 50110));
                end;
            }
            action(init)
            {
                ApplicationArea = All;
                Image = Refresh;
                Promoted = true;
                trigger OnAction()
                begin
                    CurrPage."Dino Game".init();
                end;
            }
        }
    }
}