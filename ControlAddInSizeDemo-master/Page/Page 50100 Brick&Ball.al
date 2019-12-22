page 50100 "Brick & Ball"
{
    PageType = Card;
    ApplicationArea = All;
    UsageCategory = Administration;
    Caption = 'Brick & Ball';

    layout
    {
        area(Content)
        {
            usercontrol("Ball & Brick"; "Ball&Brick")
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
                    Hyperlink(GetUrl(ClientType::Web, CompanyName, ObjectType::Page, 50100));
                end;
            }
            action(init)
            {
                ApplicationArea = All;
                Image = Refresh;
                Promoted = true;
                trigger OnAction()

                begin
                    CurrPage."Ball & Brick".init();
                end;
            }

        }
    }

    // trigger OnOpenPage()
    // begin
    //     CurrPage."Ball & Brick".init();
    // end;




}